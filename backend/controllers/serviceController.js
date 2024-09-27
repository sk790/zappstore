import serviceModel from "../models/serviceModel.js";
import userModel from "../models/userModel.js";

//for users
export const getAllServices = async (req, res) => {
  const services = await serviceModel.find().populate("provider");
  res.status(201).json(services);
};

//Only for providers
export const createService = async (req, res, next) => {
  const { _id } = req.user;
  const { serviceType, description, price, available } = req.body;
  try {
    const service = new serviceModel({
      provider: _id,
      serviceType,
      description,
      price,
      available,
    });

    await service.save();
    await userModel.findByIdAndUpdate(_id, {
      $push: { services: service._id },
    });
    res.status(201).json({ message: "Service created successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const editService = async (req, res) => {
  const { _id } = req.user;
  const { serviceId } = req.params;
  const { serviceType, description, price, available } = req.body;
  try {
    const service = await serviceModel.findById(serviceId);

    if (service.provider.toString() !== _id.toString()) {
      return res
        .status(401)
        .json({ error: "You are not authorized to edit this service" });
    }

    service.serviceType = serviceType;
    service.description = description;
    service.price = price;
    service.available = available;
    await service.save();
    res.status(201).json({ message: "Service updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteService = async (req, res) => {
  const { _id } = req.user;
  const { serviceId } = req.params;
  try {
    const service = await serviceModel.findById(serviceId);
    if (service.provider.toString() !== _id.toString()) {
      return res
        .status(401)
        .json({ error: "You are not authorized to delete this service" });
    }

    await serviceModel.findByIdAndDelete(serviceId);
    await userModel.findByIdAndUpdate(_id, {
      $pull: { services: serviceId },
    });
    res.status(201).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//for users
export const getSingleService = async (req, res) => {
  const { serviceId } = req.params;
  const service = await serviceModel.findById(serviceId).populate("provider");
  res.status(201).json(service);
};
