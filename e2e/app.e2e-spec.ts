import { LedTimerPage } from './app.po';

describe('led-timer App', () => {
  let page: LedTimerPage;

  beforeEach(() => {
    page = new LedTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
