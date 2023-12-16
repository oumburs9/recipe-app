const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    try {
      const { filter, page = 1, limit = 10 } = req.query;
  
      // Build the query based on the filter parameter
      const query = filter ? { name: { $regex: filter, $options: 'i' } } : {};
  
      // Use mongoose's skip() and limit() for pagination
      const tasks = await Task.find(query)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  };
  
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
