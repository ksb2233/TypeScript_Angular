import { browser, by, element } from 'protractor';

describe('Component Communication Cookbook Tests', () => {

  beforeEach(() => browser.get(browser.baseUrl));

  describe('Parent-to-child communication', () => {
    // ...
    const heroNames = ['Dr IQ', 'Magneta', 'Bombasto'];
    const masterName = 'Master';

    it('should pass properties to children properly', () => {
      const parent = element(by.tagName('app-hero-parent'));
      const heroes = parent.all(by.tagName('app-hero-child'));

      for (let i = 0; i < heroNames.length; i++) {
        const childTitle = heroes.get(i).element(by.tagName('h3')).getText();
        const childDetail = heroes.get(i).element(by.tagName('p')).getText();
        expect(childTitle).toEqual(heroNames[i] + ' says:');
        expect(childDetail).toContain(masterName);
      }
    });
    // ...
  });

  describe('Parent-to-child communication with setter', () => {
    // ...
    it('should display trimmed, non-empty names', () => {
      const nonEmptyNameIndex = 0;
      const nonEmptyName = '"Dr IQ"';
      const parent = element(by.tagName('app-name-parent'));
      const hero = parent.all(by.tagName('app-name-child')).get(nonEmptyNameIndex);

      const displayName = hero.element(by.tagName('h3')).getText();
      expect(displayName).toEqual(nonEmptyName);
    });

    it('should replace empty name with default name', () => {
      const emptyNameIndex = 1;
      const defaultName = '"<no name set>"';
      const parent = element(by.tagName('app-name-parent'));
      const hero = parent.all(by.tagName('app-name-child')).get(emptyNameIndex);

      const displayName = hero.element(by.tagName('h3')).getText();
      expect(displayName).toEqual(defaultName);
    });
    // ...
  });

  describe('Parent-to-child communication with ngOnChanges', () => {
    // ...
    // 테스트는 정확히 이 순서대로 실행됩니다.
    it('should set expected initial values', () => {
      const actual = getActual();

      const initialLabel = 'Version 1.23';
      const initialLog = 'Initial value of major set to 1, Initial value of minor set to 23';

      expect(actual.label).toBe(initialLabel);
      expect(actual.count).toBe(1);
      expect(actual.logs.get(0).getText()).toBe(initialLog);
    });

    it('should set expected values after clicking \'Minor\' twice', async () => {
      const repoTag = element(by.tagName('app-version-parent'));
      const newMinorButton = repoTag.all(by.tagName('button')).get(0);

      await newMinorButton.click();
      await newMinorButton.click();

      const actual = getActual();

      const labelAfter2Minor = 'Version 1.25';
      const logAfter2Minor = 'minor changed from 24 to 25';

      expect(actual.label).toBe(labelAfter2Minor);
      expect(actual.count).toBe(3);
      expect(actual.logs.get(2).getText()).toBe(logAfter2Minor);
    });

    it('should set expected values after clicking \'Major\' once', async () => {
      const repoTag = element(by.tagName('app-version-parent'));
      const newMajorButton = repoTag.all(by.tagName('button')).get(1);

      await newMajorButton.click();
      const actual = getActual();

      const labelAfterMajor = 'Version 2.0';
      const logAfterMajor = 'major changed from 1 to 2, minor changed from 23 to 0';

      expect(actual.label).toBe(labelAfterMajor);
      expect(actual.count).toBe(2);
      expect(actual.logs.get(1).getText()).toBe(logAfterMajor);
    });

    function getActual() {
      const versionTag = element(by.tagName('app-version-child'));
      const label = versionTag.element(by.tagName('h3')).getText();
      const ul = versionTag.element((by.tagName('ul')));
      const logs = ul.all(by.tagName('li'));

      return {
        label,
        logs,
        count: logs.count()
      };
    }
    // ...
  });

  describe('Child-to-parent communication', () => {
    // ...
    it('should not emit the event initially', () => {
      const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
      expect(voteLabel.getText()).toBe('Agree: 0, Disagree: 0');
    });

    it('should process Agree vote', async () => {
      const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
      const agreeButton1 = element.all(by.tagName('app-voter')).get(0)
        .all(by.tagName('button')).get(0);

      await agreeButton1.click();

      expect(voteLabel.getText()).toBe('Agree: 1, Disagree: 0');
    });

    it('should process Disagree vote', async () => {
      const voteLabel = element(by.tagName('app-vote-taker')).element(by.tagName('h3'));
      const agreeButton1 = element.all(by.tagName('app-voter')).get(1)
        .all(by.tagName('button')).get(1);

      await agreeButton1.click();

      expect(voteLabel.getText()).toBe('Agree: 0, Disagree: 1');
    });
    // ...
  });

  describe('Parent calls child via local var', () => {
    countDownTimerTests('app-countdown-parent-lv');
  });

  describe('Parent calls ViewChild', () => {
    countDownTimerTests('app-countdown-parent-vc');
  });

  function countDownTimerTests(parentTag: string) {
    // ...
    // 이 테스트는 `setInterval()` 함수를 사용해서 주기적으로 비동기 요청을 보내기 때문에
    // 앱이 안정된 상태(stablized)로 되지 않습니다.
    // 자세한 내용은 https://angular.io/api/core/ApplicationRef#is-stable-examples 문서를 참고하세요.
    // 그래서 이 테스트를 종료하려면 Angular 앱이 안정된 상태일 때 자동으로 종료되는 기능을 비활성화해야 합니다.
    beforeEach(() => browser.waitForAngularEnabled(false));
    afterEach(() => browser.waitForAngularEnabled(true));

    it('timer and parent seconds should match', async () => {
      const parent = element(by.tagName(parentTag));
      const startButton = parent.element(by.buttonText('Start'));
      const seconds = parent.element(by.className('seconds'));
      const timer = parent.element(by.tagName('app-countdown-timer'));

      await startButton.click();

      // 텍스트가 전달되는 `<app-countdown-timer>`를 기다립니다.
      await browser.wait(() => timer.getText(), 2000);

      expect(await timer.getText()).toContain(await seconds.getText());
    });

    it('should stop the countdown', async () => {
      const parent = element(by.tagName(parentTag));
      const startButton = parent.element(by.buttonText('Start'));
      const stopButton = parent.element(by.buttonText('Stop'));
      const timer = parent.element(by.tagName('app-countdown-timer'));

      await startButton.click();
      expect(await timer.getText()).not.toContain('Holding');

      await stopButton.click();
      expect(await timer.getText()).toContain('Holding');
    });
    // ...
  }

  describe('Parent and children communicate via a service', () => {
    // ...
    it('should announce a mission', async () => {
      const missionControl = element(by.tagName('app-mission-control'));
      const announceButton = missionControl.all(by.tagName('button')).get(0);
      const history = missionControl.all(by.tagName('li'));

      await announceButton.click();

      expect(history.count()).toBe(1);
      expect(history.get(0).getText()).toMatch(/Mission.* announced/);
    });

    it('should confirm the mission by Lovell', async () => {
      await testConfirmMission(1, 'Lovell');
    });

    it('should confirm the mission by Haise', async () => {
      await testConfirmMission(3, 'Haise');
    });

    it('should confirm the mission by Swigert', async () => {
      await testConfirmMission(2, 'Swigert');
    });

    async function testConfirmMission(buttonIndex: number, astronaut: string) {
      const missionControl = element(by.tagName('app-mission-control'));
      const announceButton = missionControl.all(by.tagName('button')).get(0);
      const confirmButton = missionControl.all(by.tagName('button')).get(buttonIndex);
      const history = missionControl.all(by.tagName('li'));

      await announceButton.click();
      await confirmButton.click();

      expect(history.count()).toBe(2);
      expect(history.get(1).getText()).toBe(`${astronaut} confirmed the mission`);
    }
    // ...
  });

});
