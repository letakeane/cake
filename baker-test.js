var Baker = require('./baker.js');
var Cake = require('./cake.js');
var assert = require('chai').assert;

describe('Baker', function() {
  it('should have a name', function() {
    var will = new Baker('Will');
    var casey = new Baker('Casey');

    assert.equal(will.name, 'Will');
    assert.equal(casey.name, 'Casey');
  });

  it('should start out with no orders for cakes', function() {
    var scott = new Baker('Scott');

    assert.deepEqual(scott.orders, []);
  });

  it('should be able to make a new cake', function() {
    var leta = new Baker('Leta');

    leta.bakeCake('chocolate', 'chocolate buttercream', 2, 'peanut butter', ['sea salt', 'chocolate chips']);

    assert.equal(leta.orders.length, 1);
    assert.instanceOf(leta.orders[0], Cake);
    assert.equal(leta.orders[0].flavor, 'chocolate');
    assert.equal(leta.orders[0].frosting, 'chocolate buttercream');
    assert.equal(leta.orders[0].layers, 2);
    assert.equal(leta.orders[0].filling, 'peanut butter');
    assert.deepEqual(leta.orders[0].decorations, ['sea salt', 'chocolate chips']);
  });

  it('should be able to make multiple cake', function() {
    var casey = new Baker('Casey');

    casey.bakeCake('chocolate', 'chocolate', 2, 'chocolate');
    casey.bakeCake('yellow', 'chocolate', 3, 'peanut butter', ['peanut butter cups']);
    casey.bakeCake('vanilla', 'buttercream', 2, 'strawberry jam', ['cherries', 'strawberries']);

    assert.equal(casey.orders.length, 3);
  });

  it('should be able to describe the cakes', function() {
    var casey = new Baker('Casey');

    casey.bakeCake('chocolate', 'chocolate', 3, 'peanut butter');
    casey.bakeCake('vanilla', 'buttercream', 2, 'strawberry jam', ['cherries', 'strawberries']);

    var descriptions = casey.describeOrder();
    var result = "A 3 layer chocolate cake with chocolate frosting, filled with peanut butter. A 2 layer vanilla cake with buttercream frosting, filled with peanut butter jam and decorated with cherries and strawberries."

    assert.equal(descriptions, result);
  });
});