import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

// export function useBookings() {
//   const { bookingId } = useParams();

//   const {
//     error,
//     data: booking,
//     isLoading,
//   } = useQuery({
//     queryKey: ["bookings", bookingId],
//     queryFn: () => getBooking(bookingId),
//   });

//   return { error, isLoading, booking };
// }

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // retry: false,
  });

  return { isLoading, error, booking };
}
