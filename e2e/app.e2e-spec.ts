import { RetrogustoPage } from './app.po';

describe('retrogusto App', function() {
  let page: RetrogustoPage;

  beforeEach(() => {
    page = new RetrogustoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
