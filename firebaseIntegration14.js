const deleteUser = (key) => {
    fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      console.log("User deleted successfully");
      // Remove the user from the displayed table
      const userRow = document.querySelector(`tr[data-key="${key}"]`);
      if (userRow) {
        userRow.remove();
      }
    })
    .catch(error => {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    });
  };


