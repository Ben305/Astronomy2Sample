Items = new Mongo.Collection('Items');

Item = Astro.Class.create({
    name: 'Item',
    collection: Items,
    fields: {
        name: {
            type: String,
            validators: [{
                type: 'required'
            }, {
                type: 'string'
            }]
        }
    }
});