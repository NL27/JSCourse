const getElementsByTag = require('./getelementsbytag');

// Helper to create mock DOM elements
function createElement(tagName, children = []) {
  return {
    tagName,
    children,
    hasChildNodes() {
      return this.children.length > 0;
    },
  };
}

describe('getElementsByTag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return an empty array if the root is null', () => {
    expect(getElementsByTag(null, 'div')).toEqual([]);
  });

  it('should return an array containing only the root if tagName is not provided', () => {
    const root = createElement('DIV');
    expect(getElementsByTag(root, '')).toEqual([root]);
  });

  it('should return the root element if it matches the tag name', () => {
    const root = createElement('DIV');
    const result = getElementsByTag(root, 'div');
    expect(result).toEqual([root]);
  });

  it('should be case insensitive when matching tag names', () => {
    const root = createElement('DIV');
    expect(getElementsByTag(root, 'DIV')).toEqual([root]);
    expect(getElementsByTag(root, 'div')).toEqual([root]);
    expect(getElementsByTag(root, 'Div')).toEqual([root]);
  });

  it('should return an empty array if no elements match', () => {
    const root = createElement('DIV');
    expect(getElementsByTag(root, 'span')).toEqual([]);
  });

  it('should find child elements with matching tag name', () => {
    const span1 = createElement('SPAN');
    const span2 = createElement('SPAN');
    const root = createElement('DIV', [span1, span2]);

    const result = getElementsByTag(root, 'span');
    expect(result).toEqual([span1, span2]);
  });

  it('should find deeply nested elements', () => {
    const deepSpan = createElement('SPAN');
    const innerDiv = createElement('DIV', [deepSpan]);
    const root = createElement('DIV', [innerDiv]);

    const result = getElementsByTag(root, 'span');
    expect(result).toEqual([deepSpan]);
  });

  it('should find elements at multiple levels', () => {
    const nestedDiv = createElement('DIV');
    const childDiv = createElement('DIV', [nestedDiv]);
    const root = createElement('DIV', [childDiv]);

    const result = getElementsByTag(root, 'div');
    expect(result).toEqual([root, childDiv, nestedDiv]);
  });

  it('should handle complex tree structures', () => {
    const span1 = createElement('SPAN');
    const span2 = createElement('SPAN');
    const p1 = createElement('P', [span1]);
    const p2 = createElement('P');
    const div1 = createElement('DIV', [p1, span2]);
    const div2 = createElement('DIV', [p2]);
    const root = createElement('BODY', [div1, div2]);

    expect(getElementsByTag(root, 'div')).toEqual([div1, div2]);
    expect(getElementsByTag(root, 'p')).toEqual([p1, p2]);
    expect(getElementsByTag(root, 'span')).toEqual([span1, span2]);
    expect(getElementsByTag(root, 'body')).toEqual([root]);
  });

  it('should return empty array for elements with no children when tag does not match', () => {
    const leaf = createElement('SPAN');
    expect(getElementsByTag(leaf, 'div')).toEqual([]);
  });
});