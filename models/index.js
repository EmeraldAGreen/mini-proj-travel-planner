const Traveller = require('./Traveller');
const Trips = require('./trips');
const Location = require('./location');

Traveller.hasMany(Location, {
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Traveller.hasMany(Trips, {
  foreignKey: 'traveler_id',
  onDelete: 'cascae'
});

Trips.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
});

Location.hasMany(Trips, {
    foreignKey: 'trips_id'
})
Trips.belongsTo(Location, {
    foreignKey: 'location_id'
})

module.exports = { Reader, Book, LibraryCard };