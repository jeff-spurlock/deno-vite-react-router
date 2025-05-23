import {
    deleteDinosaurById,
    findDinosaursByName,
    insertDinosaur,
    insertTask,
    updateDinosaur,
  } from "./db.ts";
  
  const dinosaurs = [
    {
      name: "Denosaur",
      description: "Dinosaurs should be simple.",
    }, 
    {
      name: "T-Rex",
      description: "T-Rex is a dinosaur.",
    },
    {
      name: "Velociraptor",
      description: "Velociraptor is a dinosaur.",
    },
  ]
  for (const dinosaur of dinosaurs) {
    await insertDinosaur(dinosaur);
  }
  
  for (const dinosaur of dinosaurs) {
    const res = await findDinosaursByName(dinosaur.name);
    const tasks = [
      {
        description: `${dinosaur.name}'s task`,
        isComplete: false,
      },
      {
        description: `${dinosaur.name}'s task 2`,
        isComplete: false,
      },
      {
        description: `${dinosaur.name}'s task 3`,
        isComplete: false,
      },
    ]
    for (const task of tasks) {
        
      await insertTask({
        dinosaurId: res[0].id,
        description: task.description,
        isComplete: false,
      });
    }
  }