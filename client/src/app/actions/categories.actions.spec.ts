import * as categoryActions from './categories';

describe('Categories', () => {
  it('should create an action through loadCategories', () => {
    const action = categoryActions.loadCategories();
    expect(action.type).toEqual(categoryActions.loadCategories.type);
  });

  it('should create an action through loadCategoriesSuccess', () => {
    const dummyResponse = {
      categories: [],
      _message: ''
    };
    const action = categoryActions.loadCategoriesSuccess({response: dummyResponse});
    expect(action.type).toEqual(categoryActions.loadCategoriesSuccess.type);
    expect(action.response).toEqual(dummyResponse);
  });

  it('should create an action through loadCategoriesFailed', () => {
    const dummyResponse = {error: 'some error'};
    const action = categoryActions.loadCategoriesFailed(dummyResponse);

    expect(action.type).toEqual(categoryActions.loadCategoriesFailed.type);
    expect(action.error).toEqual(dummyResponse.error);
  });
});
