import { BongfoodsPage } from './app.po';

describe('bongfoods App', () => {
  let page: BongfoodsPage;

  beforeEach(() => {
    page = new BongfoodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
