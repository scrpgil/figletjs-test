import { FigletPage } from './app.po';

describe('figlet App', () => {
  let page: FigletPage;

  beforeEach(() => {
    page = new FigletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
