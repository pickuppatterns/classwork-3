const mongoose = require('mongoose');

const match = id => ({
    '$match': { _id: mongoose.Types.ObjectId(id) }
});

const lookupReviews = {
    $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'video',
        as: 'reviews'
    }
};

const avgReviews = {
    $project: {
        avgRating: { $avg: '$reviews.rating' }
    }
};

const avgReviewsPipeline = id => {
    return [
        match(id),
        lookupReviews,
        avgReviews
    ];
};

module.exports = {
    avgReviewsPipeline
};
