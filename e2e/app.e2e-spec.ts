import { SuperheroTeamPage } from './app.po';

describe('superhero-team App', () => {
  let page: SuperheroTeamPage;

  beforeEach(() => {
    page = new SuperheroTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
