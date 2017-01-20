// Register the `phoneList` component on the `phoneList` module,
angular.
module('phoneList').
component('phoneList', {
    templateUrl: "phone-list/phone-list.template.html",
    controller: function PhoneListController() {
        //想法,这是一个json，可以从restful-api取得数据：this.phones = $http.get(api-url)
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
});
