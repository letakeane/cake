var Cake = require('./cake.js');
var assert = require('chai').assert;

describe('Cake', function() {
  it('should have a flavor', function() {
    var chocolate = new Cake({ flavor: 'chocolate' });
    var birthday = new Cake({ flavor: 'confetti' });

    assert.equal(chocolate.flavor, 'chocolate');
    assert.equal(birthday.flavor, 'confetti');
  });

  it('should have a frosting flavor', function() {
    var letasCake = new Cake({ flavor: 'pineapple upside down', frosting: null });
    var willsCake = new Cake({ flavor: 'chocolate', frosting: 'butterscotch' });

    assert.equal(letasCake.frosting, null);
    assert.equal(willsCake.frosting, 'butterscotch');
  });

  it('should have a number of layers', function() {
    var birthdayCake = new Cake({ flavor: 'confetti', frosting: 'buttercream', layers: 2 });
    var weddingCake = new Cake({ flavor: 'strawberry', frosting: 'buttercream', layers: 6 });

    assert.equal(birthdayCake.layers, 2);
    assert.equal(weddingCake.layers, 6);
  });

  it('should have a filling', function() {
    var caseysCake = new Cake({ flavor: 'chocolate', frosting: 'chocolate', layers: 3, filling: 'chocolate ganache' });
    var simpleCake = new Cake({ flavor: 'vanilla', frosting: 'vanilla', layers: 2, filling: 'lemon curd' });

    assert.equal(caseysCake.filling, 'chocolate ganache');
    assert.equal(simpleCake.filling, 'lemon curd');
  });

  it('should have decorations', function() {
    var caseysCake = new Cake({ flavor: 'chocolate', frosting: 'chocolate', layers: 3, filling: 'chocolate ganache', decorations: ['chocolate chips', 'chocolate sauce', 'cocoa powder'] });
    var letasCake = new Cake({ flavor: 'yellow', frosting: 'buttercream', layers: 2, filling: 'berries', decorations: ['sprinkles'] })

    assert.deepEqual(caseysCake.decorations, ['chocolate chips', 'chocolate sauce', 'cocoa powder']);
    assert.deepEqual(letasCake.decorations, ['sprinkles']);
  });

  it('should be able to have a message, or none by default', function() {
    var birthdayCake = new Cake({ flavor: 'confetti', frosting: 'chocolate', layers: 2, filling: 'candy', decorations: ['sprinkles', 'chocolate chips', 'toy car'], message: 'Happy Birthday!' });
    var breakupCake = new Cake({ flavor: 'chocolate', frosting: 'buttercream', layers: 1, filling: 'none', decorations: [] });

    assert.equal(birthdayCake.message, 'Happy Birthday!');
    assert.equal(everydayCake.message, null);
  });
});