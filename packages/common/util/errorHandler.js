export const ErrorHandler = (error) => {
    console.log("======Error", error.response);
    if (error?.response?.data) {
      const flash_error_msg =
        error.response.data?.flash_messages.length > 0
          ? error.response.data?.flash_messages[0].message
          : error.response.data.message;
      return {
        code: error.response.data.http_status_code,
        msg: flash_error_msg ? flash_error_msg : "",
      };
    } else {
      return {
        code: 0,
        msg: "Please check your internet connection",
      };
    }
  };