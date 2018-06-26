module.exports = {
  attributes  : {
    firstName: {
      type : 'string',
      required: true
    },
    lastName: {
      type : 'string',
      required : true
    },
    username: {
      type : 'string',
      required : true,
      unique : true
    },
    latitude: {
      type: 'string',
      columnType: 'double',
      required : true
    },
    longitude: {
      type: 'string',
      columnType: 'double',
      required : true
    }
  }
};
