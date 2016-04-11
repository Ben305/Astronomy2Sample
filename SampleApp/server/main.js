Meteor.startup(function() {
    Items.remove({});

    var item = new Item({
        name: 'SampleItem'
    });

    if (item.validate()) {
        item.save();
    }
});
