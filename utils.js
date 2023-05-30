function sendSuccess(data) {
    return {
      status: "succcess",
      data: data,
    };
  }
  function sendError(error) {
    return {
      status: "error",
      error: error,
    };
  }
  function sendResult(error, data) {
    if (error) {
      return sendError(error);
    } else {
      return sendSuccess(data);
    }
  }
  
  module.exports = {
    sendSuccess: sendSuccess,
    sendError: sendError,
    sendResult: sendResult,
  };