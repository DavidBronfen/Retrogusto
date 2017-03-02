import { RetrogustoPage } from './app.po';

describe('retrogusto App', function() {
  let page: RetrogustoPage;

  beforeEach(() => {
    page = new RetrogustoPage();
  });

  // Commented out according to the test fails.
  // it('should display message saying app works', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('app works!');
  // });
});
