import { AngularRxjsChatPage } from './app.po';

describe('angular-rxjs-chat App', () => {
  let page: AngularRxjsChatPage;

  beforeEach(() => {
    page = new AngularRxjsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
