const jwt = require('jsonwebtoken');

const groups = [];

// Set the initial latest ID based on existing groups
let latestID = 0;


function existsWithId(id) {
  return groups.find(group => group.id === id);
}

async function getAllGroups() {
  return groups;
}

// Function to create a new group
async function createGroup(attrs) {
  latestID += 1; 
  const newGroup = {
    id: latestID,
    ...attrs
  };
  groups.push(newGroup); 
  return newGroup; 
}

// Function to remove a group by ID
async function removeGroupById(id) {
  const index = groups.findIndex(group => group.id === id);
  if (index !== -1) {
    const [removedGroup] = groups.splice(index, 1); 
    return removedGroup; 
  }
  return null; 
}

// Function to update an existing group
async function updateGroup(id, attrs) {
  const group = groups.find(group => group.id === id);
  if (group) {
    Object.assign(group, attrs); 
    return group; 
  }
  return null; 
}

// Export the functions for use in other modules
module.exports = {
  existsWithId,
  getAllGroups,
  createGroup,
  removeGroupById,
  updateGroup
};
