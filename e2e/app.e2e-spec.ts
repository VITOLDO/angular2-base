import { Angular2BasePage } from './app.po';

describe('angular2-base App', () => {
  let page: Angular2BasePage;

  beforeEach(() => {
    page = new Angular2BasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
