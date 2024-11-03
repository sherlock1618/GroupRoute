const groups = [{
  creatorId: 0,
  endDate: "2024-11-03",
  id: 0,
  name: "exampleGroup",
  startDate: "2024-11-03"
}];
let latestID = 0;

function existsWithId(id) {
return groups.find(group => group.id == id);
}

async function getAllGroups() {
  return groups;
}

async function createGroup(attrs) {
  latestID += 1;
  const newGroup = {
      id: latestID,
      ...attrs
  };
  groups.push(newGroup); // Add the new group to the array
  return newGroup;
}

async function removeGroupById(id) {
  const index = groups.findIndex(group => group.id === id);
  if (index !== -1) {
      const [removedGroup] = groups.splice(index, 1);
      return removedGroup;
  }
  return null; 
}

async function updateGroup(id, attrs) {
  const group = groups.find(group => group.id === id);
  if (group) {
      Object.assign(group, attrs); // Update the group with new attributes
      return group;
  }
  return null; 
}

module.exports = {
  existsWithId,
  getAllGroups,
  createGroup,
  removeGroupById,
  updateGroup
};
