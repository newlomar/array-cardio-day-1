    console.log('yes')
    
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const wereBornInThe1500s = inventors.filter((inventor) => {
      return inventor.year >= 1500 && inventor.year <= 1599
    })

    console.log('Answer to 1 - ', wereBornInThe1500s)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const ArrayOfInventorsFirstAndLastNames = inventors.map((inventor) => {
      return [inventor.first, inventor.last]
    })

    console.log('Answer to exercise 2 - ', ArrayOfInventorsFirstAndLastNames)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const reversedSortArray = inventors.sort((a, b) => {

      if (a.year > b.year) {
        return 1;
      }

      if(a.year < b.year) {
        return -1
      }

      return 0

    })

    console.log('Answer to exercise 3 -')
    console.table(reversedSortArray)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    const inventorsYearsLivedSum = inventors.reduce((acc, inventor) => {
      return acc + (inventor.passed - inventor.year)
    }, 0)

    console.log('Answer to exercise 4 - ', inventorsYearsLivedSum)

    // 5. Sort the inventors by years lived

    const inventorsSortedByYearsLived = inventors.sort((a, b) => {

      inventor1Age = a.passed - a.year

      inventor2Age = b.passed - b.year

      if (inventor1Age < inventor2Age) {
        return 1
      }

      if (inventor1Age > inventor2Age) {
        return -1
      }

      return 0
    })

    console.log('Answer Exercise 5 - ')
    console.table(inventorsSortedByYearsLived)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const category = document.querySelector('.mw-category')
    // const links = [...category.querySelectorAll('a')]
    // const mapLinks = links.map((item) => {
    //   return item.textContent
    // })

    // const deAnywhere = mapLinks.filter((boulevard) => {
    //   return boulevard.includes('de')
    // })

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortedPeopleByLastName = people.sort((lastOne, nextOne) => {
      
      const [aLast, aFirst] = lastOne.split(', ')
      const [bLast, bFirst] = nextOne.split(', ')

      return aLast > bLast ? 1 : -1

    })

    console.log('Answer exercise 7 - ')
    console.table(sortedPeopleByLastName)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const sumInstances = data.reduce((obj, item) => {

      if(!obj[item]) {
        obj[item] = 0
      }

      obj[item]++
      return obj
    }, {})

    console.table(sumInstances)