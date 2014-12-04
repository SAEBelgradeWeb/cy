angular.module('starter.controllers', [])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

    $scope.hideSidemenuBackButton = true;
    var topLevelCategories;

    topLevelCategories = $scope.categories = [
      {id: 1, name: 'Geography - people', taxons: [
        {id: 17, name: 'Geography - people', taxons: [], is_first_level: false},
        {id: 18, name: 'Position', taxons: [], is_first_level: false},
        {id: 19, name: 'Morphology', taxons: [], is_first_level: false},
        {id: 20, name: 'Climate', taxons: [], is_first_level: false},
        {id: 21, name: 'Natural Environment', taxons: [], is_first_level: false},
        {id: 22, name: 'Population', taxons: [], is_first_level: false},
        {id: 23, name: 'Religious Groups', taxons: [], is_first_level: false},
        {id: 24, name: 'Towns/Places of Interest', taxons: [], is_first_level: false},
        {id: 25, name: 'Photo Gallery', taxons: [], is_first_level: false}
      ], is_first_level: true},

      {id: 2, name: 'History', taxons: [
        {id: 26, name: 'Historical Brief', taxons: [], is_first_level: false},
        {id: 27, name: 'Republic of Cyprus', taxons: [], is_first_level: false},
        {id: 28, name: 'Cyprus Problem', taxons: [], is_first_level: false},
        {id: 29, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 3, name: 'Cyprus in the world', taxons: [
        {id: 30, name: 'Participations in Intl Organisation', taxons: [], is_first_level: false},
        {id: 31, name: 'EU Member State', taxons: [], is_first_level: false},
        {id: 32, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},      

      {id: 4, name: 'Political system and administration', taxons: [
        {id: 33, name: 'Legislative Power', taxons: [], is_first_level: false},
        {id: 34, name: 'Flag and Emblem', taxons: [], is_first_level: false},
        {id: 35, name: 'Presidental Democracy', taxons: [], is_first_level: false},
        {id: 36, name: 'Executive Power', taxons: [], is_first_level: false},
        {id: 37, name: 'Judiciary', taxons: [], is_first_level: false},
        {id: 38, name: 'Parliamentary Parties', taxons: [], is_first_level: false},
        {id: 39, name: 'Independent Institutions Judicary', taxons: [], is_first_level: false},
        {id: 40, name: 'Local Administration', taxons: [], is_first_level: false},
        {id: 41, name: 'Lands and Surveys', taxons: [], is_first_level: false},
        {id: 42, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 5, name: 'Defence - Security', taxons: [
        {id: 43, name: 'National Guard', taxons: [], is_first_level: false},
        {id: 44, name: 'Police', taxons: [], is_first_level: false},
        {id: 45, name: 'Fire service', taxons: [], is_first_level: false},
        {id: 46, name: 'Prisons', taxons: [], is_first_level: false},
        {id: 47, name: 'Civil Defence', taxons: [], is_first_level: false},
        {id: 48, name: 'Contribution in Combating International Terrorism', taxons: [], is_first_level: false},
        {id: 49, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 6, name: 'Economy', taxons: [
        {id: 50, name: 'Basic Characteristics - Objectives', taxons: [], is_first_level: false},
        {id: 51, name: 'Energy', taxons: [], is_first_level: false},
        {id: 52, name: 'Investments', taxons: [], is_first_level: false},
        {id: 53, name: 'The Cooperative Movement of Cyprus', taxons: [], is_first_level: false},
        {id: 54, name: 'Tourism', taxons: [], is_first_level: false},
        {id: 55, name: 'Trade', taxons: [], is_first_level: false},
        {id: 56, name: 'Manufacturing and Industry', taxons: [], is_first_level: false},
        {id: 57, name: 'Securities and Exchange Commission', taxons: [], is_first_level: false},
        {id: 58, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 7, name: 'Transport and Communications', taxons: [
        {id: 59, name: 'Road Network and Transport', taxons: [], is_first_level: false},
        {id: 60, name: 'Civil Aviation', taxons: [], is_first_level: false},
        {id: 61, name: 'Merchant Shipping', taxons: [], is_first_level: false},
        {id: 62, name: 'Cyprus Port Authority', taxons: [], is_first_level: false},
        {id: 63, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 8, name: 'Agriculture - Natural resources', taxons: [
        {id: 64, name: 'Agriculture', taxons: [], is_first_level: false},
        {id: 65, name: 'Agricultural Research', taxons: [], is_first_level: false},
        {id: 66, name: 'Water Development', taxons: [], is_first_level: false},
        {id: 67, name: 'Fisheries - Marine Resources', taxons: [], is_first_level: false},
        {id: 68, name: 'Veterinary Services', taxons: [], is_first_level: false},
        {id: 69, name: 'Land Consolidation', taxons: [], is_first_level: false},
        {id: 70, name: 'Geological Survey', taxons: [], is_first_level: false},
        {id: 71, name: 'Mineral Resources', taxons: [], is_first_level: false},
        {id: 72, name: 'Meteorological Service', taxons: [], is_first_level: false},
        {id: 73, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 9, name: 'Social', taxons: [
        {id: 74, name: 'Health', taxons: [], is_first_level: false},
        {id: 75, name: 'Social Insurance', taxons: [], is_first_level: false},
        {id: 76, name: 'Social Welfare', taxons: [], is_first_level: false},
        {id: 77, name: 'Labour and Employment', taxons: [], is_first_level: false},
        {id: 78, name: 'Human Resource Development Authority', taxons: [], is_first_level: false},
        {id: 79, name: 'Housing', taxons: [], is_first_level: false},
        {id: 80, name: 'Youth Board of Cyprus', taxons: [], is_first_level: false},
        {id: 81, name: 'Equal Distribution of Burdens Agency', taxons: [], is_first_level: false},
        {id: 82, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 10, name: 'Services', taxons: [
        {id: 83, name: 'Civil Registry and Migration', taxons: [], is_first_level: false},
        {id: 84, name: 'Postal Services', taxons: [], is_first_level: false},
        {id: 85, name: 'Electronic Communications', taxons: [], is_first_level: false},
        {id: 86, name: 'Electricity Supply', taxons: [], is_first_level: false},
        {id: 87, name: 'Consumer Protection', taxons: [], is_first_level: false},
        {id: 88, name: 'Citizen Service Centres', taxons: [], is_first_level: false},
        {id: 89, name: 'Cyprus Library', taxons: [], is_first_level: false},
        {id: 90, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 11, name: 'Education', taxons: [
        {id: 91, name: 'Education System', taxons: [], is_first_level: false},
        {id: 92, name: 'Pre-Primary Education', taxons: [], is_first_level: false},
        {id: 93, name: 'Primary Education', taxons: [], is_first_level: false},
        {id: 94, name: 'Secondary Education', taxons: [], is_first_level: false},
        {id: 95, name: 'Higher and Tertiary Education', taxons: [], is_first_level: false},
        {id: 96, name: 'Universities and Higher Education Institutions', taxons: [], is_first_level: false},
        {id: 97, name: 'S.E.K.A.P.', taxons: [], is_first_level: false},
        {id: 98, name: 'K.Y.S.A.T.S.', taxons: [], is_first_level: false},
        {id: 99, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 12, name: 'Culture', taxons: [
        {id: 100, name: 'Cultural Services', taxons: [], is_first_level: false},
        {id: 101, name: 'Cultural Life', taxons: [], is_first_level: false},
        {id: 102, name: 'Antiquities', taxons: [], is_first_level: false},
        {id: 103, name: 'Cyprus Handicraft Service', taxons: [], is_first_level: false},
        {id: 104, name: 'Service', taxons: [], is_first_level: false},
        {id: 105, name: 'Sports', taxons: [], is_first_level: false},
        {id: 106, name: 'Cyprus Research Centre', taxons: [], is_first_level: false},
        {id: 107, name: 'Volunterism', taxons: [], is_first_level: false},
        {id: 108, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 13, name: 'Mass media', taxons: [
        {id: 109, name: 'General Information', taxons: [], is_first_level: false},
        {id: 110, name: 'Freedom of the Pass', taxons: [], is_first_level: false},
        {id: 111, name: 'Cyprus Press', taxons: [], is_first_level: false},
        {id: 112, name: 'Radio and Television', taxons: [], is_first_level: false},
        {id: 113, name: 'Cyprus Broadcasting Corporation', taxons: [], is_first_level: false},
        {id: 114, name: 'News Agencies', taxons: [], is_first_level: false},
        {id: 115, name: 'Press and Information Office', taxons: [], is_first_level: false},
        {id: 116, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 14, name: 'Missions Abroad', taxons: [
        {id: 117, name: 'Embrassies/High Commissions', taxons: [], is_first_level: false},
        {id: 118, name: 'Missions to International Organisations', taxons: [], is_first_level: false},
        {id: 119, name: 'Consulates General', taxons: [], is_first_level: false},
        {id: 120, name: 'Cyprus Trade Centres', taxons: [], is_first_level: false},
        {id: 121, name: 'Cyprus Tourism Organisation Offices', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 15, name: 'Featured Articles', taxons: [
        {id: 122, name: 'The Olive Tree and Olive Oil in the Traditional Life of Cyprus', taxons: [], is_first_level: false},
        {id: 123, name: 'Cyprus Mouflon', taxons: [], is_first_level: false},
        {id: 124, name: 'The National Plant of Cypru', taxons: [], is_first_level: false},
        {id: 125, name: 'Did you know?', taxons: [], is_first_level: false},
        {id: 126, name: 'Wine Culture in Cyprus', taxons: [], is_first_level: false},
        {id: 127, name: 'Cyprus, Island of Aphrodite', taxons: [], is_first_level: false},
        {id: 128, name: 'Kykkos Monastery Museum', taxons: [], is_first_level: false},
        {id: 129, name: 'The Keryneia Ship', taxons: [], is_first_level: false},
        {id: 130, name: 'The Cartography of Cyprus Through the Ages', taxons: [], is_first_level: false},
      ], is_first_level: true},

      {id: 16, name: 'Photo Gallery', taxons: [
        {id: 131, name: 'Photo Gallery', taxons: [], is_first_level: false},
      ], is_first_level: true},


    ];
  
    var getByParentId = function(id) {
      for (var i in topLevelCategories) {
        if (topLevelCategories[i].id == id) {
          return topLevelCategories[i].taxons;
        }
      }
    }

    $scope.toggleCategories = function() {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.showSubcategories = function(category) {
        $scope.categories = getByParentId(category.id);
        $scope.hideSidemenuBackButton = false;
    };

    $scope.showTopLevelCategories = function () {
        $scope.categories = topLevelCategories;
        $scope.hideSidemenuBackButton = true;
    };
})

.controller('homeCtrl', function($scope, $ionicLoading, $stateParams, Post) {

  $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
   //   $ionicLoading.hide();

    // Get all posts
    Post.get($stateParams.slug)
      .success(function(data) {
        console.log('dasads')
        console.log(data)
        $scope.posts = data;
        $ionicLoading.hide();

    });
})


app.factory('Post', function($http) {
    console.log(url + '?json=get_page&slug=homepage')
    return {
      // get all the projects
      get : function() {
        return $http.get(url + '?json=get_page&slug=homepage');
      },

    }

  });