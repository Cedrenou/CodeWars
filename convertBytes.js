function convertBytes(bytes, precision) {
    const kilobyte = 1024
    const megabyte = kilobyte * 1024
    const gigabyte = megabyte * 1024
    const terabyte = gigabyte * 1024

    if ((bytes >= 0) && (bytes < kilobyte)) {
      return bytes + ' Octets'

    } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
      return (bytes / kilobyte).toFixed(precision) + ' Ko'

    } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
      return (bytes / megabyte).toFixed(precision) + ' Mo'

    } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
      return (bytes / gigabyte).toFixed(precision) + ' Go'

    } else if (bytes >= terabyte) {
      return (bytes / terabyte).toFixed(precision) + ' To'

    } else {
      return bytes + ' Octet'
    }
  }