import axios from "axios";
import { useEffect, useState } from "react";

export function useFeatch<T = unknown>(url: string) {
	const [value, setValue] = useState<T | null>(null)
	
	useEffect(() => {
		axios.get(url)
		  .then(res => {
			setValue(res.data.data
			)
		  })
	  }, []);

	  return { value }
}