var formInfo = {}
var app = angular.module('borrower-defense', ['ui.router', 'ngMaterial']);
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
var schoolInformation = {}
app.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/borrower-information',
    template: 'sadasd'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<div>asdasdasdasd</div>'
  }
  $stateProvider.state('default', {
    controller: 'HomeController',
    templateUrl: 'pages/home.html',
    url: ''
  })
  $stateProvider.state('borrower-information', {
    controller: function($scope, $rootScope) {
      $scope.months = months
    },
    templateUrl: 'pages/borrower-information.html',
    url: '/borrower-information'
  })

  $stateProvider.state('school-information', {
    controller: function($scope) {
      $scope.months = months
      $scope.myselect = {}
      $scope.myselect.q = "Month"
      $scope.states = states
      $scope.schoolInformation = schoolInformation.info
      $scope.add_date = 0

    },
    templateUrl: 'pages/school-information.html',
    url: '/school-information'
  })
  $stateProvider.state('supported-documents', {
    controller: function() {

    },
    templateUrl: 'pages/supported-documents.html',
    url: '/supported-documents'
  })
  $stateProvider.state('other-loan-relief', {
    controller: function($scope) {
      $scope.checkbox = ''
    },
    templateUrl: 'pages/other-loan-relief.html',
    url: '/other-loan-relief'
  })
  $stateProvider.state('foreberance', {
    controller: function($scope) {
      $scope.tog = 0
    },
    templateUrl: 'pages/foreberance.html',
    url: '/foreberance'
  })
  $stateProvider.state('review-and-sign', {
    controller: function() {

    },
    templateUrl: 'pages/review-and-sign.html',
    url: '/review-and-sign'
  })
  $stateProvider.state('basis-for-borrower-defense', {
    controller: function($scope) {
      $scope.basis = {}

    },
    templateUrl: 'pages/basis-for-borrower-defense.html',
    url: '/basis-for-borrower-defense'
  })
});

app.controller('HomeController', function($scope, $state) {
  $scope.nextPage = function() {
    formInfo['SchoolName'] = $scope.SchoolName
    $state.go('BorrowerInformation')
  }
});
app.controller('StepNavCtrl', function($scope, $state) {
  $scope.nextPage = function() {
    formInfo['SchoolName'] = $scope.SchoolName
    $state.go('BorrowerInformation')

  }
  console.log("state", $state)
  console.log("state", $state.current.name)

  $scope.url = $state.current.name
});
app.controller('BorrowerInformationController', function($scope, $state) {
  $scope.nextPage = function() {
    formInfo['SchoolName'] = $scope.SchoolName
    $state.go('BorrowerInformation')
  }
});
app.controller('StepNavController', function($scope, $state) {
  $scope.nextPage = function() {
    formInfo['SchoolName'] = $scope.SchoolName
    $state.go('BorrowerInformation')
  }
});

app.run(function($rootScope, $urlRouter) {
  $rootScope.next = function() {
    alert(true)
  }
  $rootScope.$on('$locationChangeSuccess', function(evt) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});


app.controller('HomeCtrl', DemoCtrl);

function DemoCtrl($timeout, $q, $log) {
  var self = this;

  self.simulateQuery = false;
  self.isDisabled = false;

  // list of `state` value/display objects
  self.states = loadAll();
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;

  self.newState = newState;

  function newState(state) {
    alert("Sorry! You'll need to create a Constitution for " + state + " first!");
  }

  // ******************************
  // Internal methods
  // ******************************

  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch(query) {
    var results = query ? self.states.filter(createFilterFor(query)) : self.states,
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(results);
      }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
    if (item.value != '') {
      console.log("test", item.value)
      schoolInformation = item
    }
  }

  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    return colleges.map(function(school) {
      return {
        value: school.NAME.toLowerCase(),
        display: school.NAME,
        info: school
      };
    });
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };

  }
}

function locationHashChanged() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

window.onhashchange = locationHashChanged;