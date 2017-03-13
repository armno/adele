import { AdelePage } from './app.po';

describe('adele App', () => {
  let page: AdelePage;

  beforeEach(() => {
    page = new AdelePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
