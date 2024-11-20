import Message from '../models/message_model.js';


export const get_messages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const add_message = async (req, res) => {
  const { username, message } = req.body;
  try {
    if(!username, !message){
        return res.status(404).json({messages:'Please required'})
    }
    const newMessage = await Message.create({ username, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message' });
  }
};
