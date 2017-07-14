import { RetrogustoPage } from './app.po';

describe('retrogusto App', () => {
  let page: RetrogustoPage;

  beforeEach(() => {
    page = new RetrogustoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
