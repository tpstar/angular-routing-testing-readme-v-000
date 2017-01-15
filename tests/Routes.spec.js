describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');
		});
	});

	describe('Settings User', function () {
		var state;

		it('should have the correct template Url', function () {
			state = $state.get('settings.user');

			expect(state.templateUrl).toEqual('views/settings/user.html');
		});
	});

	describe('Settings Notifications', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings.notifications');

			expect(state.url).toEqual('/notifications');
		});
	});

});
