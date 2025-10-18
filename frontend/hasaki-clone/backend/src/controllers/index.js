import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../services/itemService';

export const getItems = async (req, res) => {
  try {
    const items = await getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items', error });
  }
};

export const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await getItemById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving item', error });
  }
};

export const createNewItem = async (req, res) => {
  const newItem = req.body;
  try {
    const createdItem = await createItem(newItem);
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
};

export const updateExistingItem = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedItem = await updateItem(id, updatedData);
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
};

export const deleteExistingItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await deleteItem(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};