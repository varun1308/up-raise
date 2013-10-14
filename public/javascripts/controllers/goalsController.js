UpRaise.GoalsController = Ember.ArrayController.extend({
	actions: {
		showAddGoalRow: function() {
			this.set('showAddRow', true);
		},
		saveRow: function() {
			
			var weight = this.get('weight');
			if (!weight.trim()) { 
				console.log('no weight found')
				return; 
			}

			var goal = this.store.createRecord('goal', {
				index: this.get('nextIndex'),
				kra: this.get('kra'),
				type: this.get('type'),
				description: this.get('description'),
				weight: this.get('weight')
			});

			this.set('showAddRow',false);
						
			goal.save();
		}
	},
	nextIndex: function() {
		var length = this.get('length') + 1;
		return length;
	}.property('@each.index'),
	showAddRow: false
});