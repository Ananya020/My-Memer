export const getAllMemes = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      if (!response.ok) {
        throw new Error('Failed to fetch memes');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching memes:', error.message);
      return { success: false, error: error.message };
    }
  };
  