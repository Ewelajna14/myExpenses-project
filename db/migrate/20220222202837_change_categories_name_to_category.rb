class ChangeCategoriesNameToCategory < ActiveRecord::Migration[6.1]
  def change
    rename_column :categories, :categories, :category
  end
end
