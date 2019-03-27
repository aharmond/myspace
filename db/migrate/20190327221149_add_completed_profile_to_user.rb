class AddCompletedProfileToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :completed_profile, :boolean, default: false
  end
end
