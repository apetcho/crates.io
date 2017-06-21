import { test } from 'qunit';
import moduleForAcceptance from 'cargo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | team page');

test('has team organization display', function(assert) {
    visit('/teams/github:org:thehydroimpulse');

    andThen(function() {
        hasText(assert, '.team-info h1', 'org_test');
        hasText(assert, '.team-info h2', 'thehydroimpulseteam');
    });
});

test('has link to github in team header', function(assert) {
    visit('/teams/github:org:thehydroimpulse');

    andThen(function() {
        const $githubLink = findWithAssert('.info a');
        assert.equal($githubLink.attr('href').trim(), 'https://github.com/org_test');
    });

});

test('github link has image in team header', function(assert) {
    visit('/teams/github:org:thehydroimpulse');

    andThen(function() {
        const $githubImg = findWithAssert('.info a img');
        assert.equal($githubImg.attr('src').trim(), '/assets/GitHub-Mark-32px.png');
    });
});

test('team organization details has github profile icon', function(assert) {
    visit('/teams/github:org:thehydroimpulse');

    andThen(function() {
        const $githubProfileImg = findWithAssert('.info img');
        assert.equal($githubProfileImg.attr('src').trim(), 'https://avatars.githubusercontent.com/u/565790?v=3&s=170');
    });
});