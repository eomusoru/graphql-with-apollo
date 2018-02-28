import { ApolloPage } from './app.po';

describe('apollo App', () => {
  let page: ApolloPage;

  beforeEach(() => {
    page = new ApolloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
