class Book < ApplicationRecord
  validates :title, :author, :description, presence: true


  has_many :reviews,
    foreign_key: :book_id,
    class_name: :Review

  has_many :saves, 
    as: :item

  has_many :saved_users,
    through: :saves,
    source: :user

  # For active storage
  has_one_attached :photo
  # Check if attached `book_instance.photo.attached?`

  def average_rating

    all_ratings = self.reviews.to_a.map do |review|
      review.rating
    end

    return 0 unless all_ratings.length > 0

    all_ratings.sum / all_ratings.length
  end

  def saved?
    self.saves.pluck(:user_id).includes?(@current_user.id)
  end
end
