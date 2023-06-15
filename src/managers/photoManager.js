const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner');

exports.getPhoto = (photoId) => Photo.findById(photoId).populate('owner');

exports.create = (photoData) => Photo.create(photoData);

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);

exports.edit = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.addComment = async (photoId, commentData) => {
    const photo = await Photo.findById(photoId);

    photo.comments.push(commentData);

    return photo.save();
};

exports.getByOwner = (ownerId) => Photo.find( { owner: ownerId });