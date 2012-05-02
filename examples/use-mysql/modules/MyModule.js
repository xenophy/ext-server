module.exports = {
    useTable: 'users',
    func: function(done) {
        this.find({}, function(err, fields) {
            done(fields);
        });
    }
};
