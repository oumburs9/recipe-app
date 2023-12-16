mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,'name is required'],
            trim: true, 
          },
          todoDate: {
            type: Date,
            required: true,
            validate: {
              validator: date => date >= new Date(), 
              message: 'Todo date must be in the future',
            },
          },
          active: {
            type: Boolean,
            default: true,
          },
    },    
    {
        timestamps: true
    }
)

const Task = mongoose.model('Task',taskSchema)

module.exports = Task