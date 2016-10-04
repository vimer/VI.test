const BaseModel = require('./base');

function UserModel(store) { //继承
	BaseModel.call(this, store, 'user:');
}

const PREFIX_EMAIL_TO_ID = 'email-id:';

Object.assign(UserModel.prototype, BaseModel.prototype, { //把父类的原型函数复制到子类
	create: function (obj, callback) {//重载父类的create
		const self = this;
		BaseModel.prototype.create.call(this, obj, function (err, result) { //先调用父类create
			if (err) {
				callback(err);
				return;
			}
			if (obj.email) {
				self.store.set(PREFIX_EMAIL_TO_ID + obj.email, obj.id, callback);
				return;
			}
			callback(err, result);
		});
	},

	getByEmail: function (email, callback) {
		const self = this;
		this.store.get(PREFIX_EMAIL_TO_ID + email, function(err, id) {
			if(err) {
				callback(err);
				return;
			}
			self.get(id, callback);
		});
	}
});

module.exports = UserModel;
