import { MUICT15Page } from './app.po';

describe('muict15 App', () => {
  let page: MUICT15Page;

  beforeEach(() => {
    page = new MUICT15Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
