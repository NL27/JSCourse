const hasDuplicateIds = require('./hasduplicateids');

// Helper to create mock DOM elements
function createElement(id, children = []) {
    return {
        id: id || '',
        children: children,
        hasChildNodes() {
            return this.children.length > 0;
        },
    };
}

describe('hasDuplicateIds', () => {
    let root;

    beforeEach(() => {
        root = createElement('root');
    });

    afterEach(() => {
        root = null;
    });

    describe('Edge cases', () => {
        test('should return false for null root', () => {
            expect(hasDuplicateIds(null)).toBe(false);
        });

        test('should return false for undefined root', () => {
            expect(hasDuplicateIds(undefined)).toBe(false);
        });

        test('should return false for single element with no id', () => {
            root.id = '';
            expect(hasDuplicateIds(root)).toBe(false);
        });

        test('should return false for single element with an id', () => {
            expect(hasDuplicateIds(root)).toBe(false);
        });
    });

    describe('Trees without duplicates', () => {
        test('should return false for tree with unique ids', () => {
            root.children = [
                createElement('child1'),
                createElement('child2'),
                createElement('child3'),
            ];
            expect(hasDuplicateIds(root)).toBe(false);
        });

        test('should return false for deeply nested tree with unique ids', () => {
            root.children = [
                createElement('level1', [
                    createElement('level2', [
                        createElement('level3'),
                    ]),
                ]),
            ];
            expect(hasDuplicateIds(root)).toBe(false);
        });

        test('should return false when some elements have no id', () => {
            root.children = [
                createElement(''),
                createElement('child1'),
                createElement(''),
            ];
            expect(hasDuplicateIds(root)).toBe(false);
        });
    });

    describe('Trees with duplicates', () => {
        test('should return true for direct children with same id', () => {
            root.children = [
                createElement('duplicate'),
                createElement('duplicate'),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });

        test('should return true when child has same id as root', () => {
            root.children = [
                createElement('root'),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });

        test('should return true for duplicates in nested children', () => {
            root.children = [
                createElement('level1', [
                    createElement('duplicate'),
                ]),
                createElement('level1b', [
                    createElement('duplicate'),
                ]),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });

        test('should return true for deeply nested duplicate', () => {
            root.children = [
                createElement('unique1', [
                    createElement('unique2', [
                        createElement('deep'),
                    ]),
                ]),
                createElement('deep'),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });
    });

    describe('Complex structures', () => {
        test('should handle wide tree without duplicates', () => {
            root.children = [
                createElement('a'),
                createElement('b'),
                createElement('c'),
                createElement('d'),
                createElement('e'),
            ];
            expect(hasDuplicateIds(root)).toBe(false);
        });

        test('should handle wide tree with duplicates', () => {
            root.children = [
                createElement('a'),
                createElement('b'),
                createElement('c'),
                createElement('b'),
                createElement('e'),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });

        test('should handle mixed tree with empty ids and duplicates', () => {
            root.children = [
                createElement(''),
                createElement('item'),
                createElement('', [
                    createElement('item'),
                ]),
            ];
            expect(hasDuplicateIds(root)).toBe(true);
        });

        test('should return false when multiple elements have empty ids', () => {
            root.children = [
                createElement(''),
                createElement(''),
                createElement(''),
            ];
            expect(hasDuplicateIds(root)).toBe(false);
        });
    });
});