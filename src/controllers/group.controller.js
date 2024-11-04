const {
    existsWithId,
    getAllGroups,
    createGroup,
    removeGroupById,
    updateGroup
} = require("../models/group.model");

async function HTTPGetAllGroups(req, res) {
    const groups = await getAllGroups();
    return res.status(200).json(groups);
}

async function HTTPCreateGroup(req, res) {
    const attrs = req.body;

    try {
        const newGroup = await createGroup(attrs);
        res.status(201).json(newGroup);
    } catch (err) {
        res.status(400).json({
            error: "Group cannot be created!",
        });
    }
}

async function HTTPRemoveGroup(req, res) {
    const { id } = req.params;

    if (!existsWithId(parseInt(id))) {
        return res.status(404).json({
            error: "Group not found!"
        });
    }

    const removedGroup = await removeGroupById(parseInt(id));
    return res.status(200).json(removedGroup);
}

async function HTTPUpdateGroup(req, res) {
    const { id } = req.params;
    const attrs = req.body;

    if (!existsWithId(parseInt(id))) {
        return res.status(404).json({
            error: "Group not found!"
        });
    }

    const updatedGroup = await updateGroup(parseInt(id), attrs);
    return res.status(202).json(updatedGroup);
}

module.exports = {
    HTTPGetAllGroups,
    HTTPCreateGroup,
    HTTPRemoveGroup,
    HTTPUpdateGroup,
};
