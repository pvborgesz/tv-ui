/* eslint-disable no-unused-vars */
import React from 'react'

export default function Footer() {
    return (
        <footer className='flex items-center justify-between text-white mb-30 ml-10 mr-10 mb-20'>
            <div className='font-bold flex gap-5 items-center'>
                <img src='https://cdn-icons-png.flaticon.com/512/2719/2719648.png' alt='arrow' className='w-10 h-10 fill-white border-2 border-white rounded-sm' />
                <p className='text-2sm mt-1.5'>Texto Falado</p>
                <img src='https://imagepng.org/wp-content/uploads/2018/05/libras-simbolo-liguagem-de-sinais-1.png' alt='arrow' className='w-10 h-10 fill-white border-2 border-white rounded-sm' />
                <p className='text-2sm mt-1.5'>Acessível em Libras</p>
            </div>
            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-zinc-500 p-1 rounded-sm'>
                <p className='text-2xl mt-1.5 font-bold mb-1.5'>
                    Avançar
                </p>
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhAIBwgQFRUWDRUZFhYYGR0bHhkiIBUXHhsdGSAkICggHhwmIhYXLTEtJSk3MjoyHR8/Pz84PjQtMysBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABggDBAcCAQX/xABFEAACAQIDAwYGDwcFAAAAAAAAAQIDBAUGEQchQRITMVGBkTRhcXKxshciIzI3QlJTVWJzk7PR0hRUgpKhwcIIFjU2ov/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDxtg2pX9tilTL+Wrjm1T9rWrR985cYQfxVHi1v16tN/Frq6uLuq6t3XnOT6ZSk5N9r3i8uKl5d1Lms9ZTqSlJ9bbbfpMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHulVqUaiqUakotdDT0a7TqWzDavieGYnSwzMV3Krbzko8ub1nSbe6XKe9w60+hb10aPlQAvFqusFSvZCx/wDe5d4AiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdxyzs/s86bI7OdPk07mDr81V06fd6ntKnFxfenv60+HFpth3waWnn1/x6gFZMVw28wjEKlhiVvKnUhLSUXw/NPpTW5rQ1C1u0vZ9Z50w/l0+TTuoR9yq9f1KnFwfem9VxTq7iuG3mEYhUsMSt5U6kJaSi+H5p8GtzQGoAAAAAAAAAAAAAAAAAAAAAAHQMn7JMx5kjG4r01bUX8eqnymuuEOl9uifBgc/BZ3AdjGU8LSleUalzNb9astI9HCMdFp52pMrDLmB4d4Bg9rT6+RShHXytLeBTAF3lb0EtFRh3I+8xR+aj3ICkALv8xR+aj3IcxR+aj3ICkALv8xR+aj3IcxR+aj3ICkBabYd8Glp59f8AHqE55ij81HuR7jGMVpFJAfSE7TNn1nnTD+XT5NO5hF81V6/qVNN7g+9N6rinNgBSfFcNvMHxCpYYlbyp1IS0lF8PzT4NbmjULW7S9n1nnTD+XDk07mEXzVXr+pU4uH9U964p1dxbDLzB8QqWGJW8qdSEtJRfD80+DW5oDUAAAAAAAAAAAAAAAAM9jZ3N/dwtLKjKc5yUYxitW2+CMBZbYzs+jlvDVi+K0V+1VYapNb6MGt0fFN/G7uvUPOzXZNY5ehDEsdhGtc6JqL0cKT+qvjTXyn2db6eAAAAAAAAAAAAAAAAAAIXtKyBZZ1w7WPJp3MIvmqv+E+Lg+9PeuKc0AFKMXwu9wbEamH4lbyp1IS0lF+ldafSmtzRplr9pWQLLOuHarkwuYR9yq6f+J8XB/wBG9VxTq5i+F3uDYjUw/EreUKkJaSi/SutPg10gaYAAAAAAAAAAAADouxDKkcxZq/bLulrRtkpy16JT19zi+1N/w+Ms8c/2H4JHCMhUa0o6TuJSrS8j3Q7OTGL7WdAAAAAAAAAAAAAAAAAAAAAAABC9pWQLLOuHark07mEXzVX/AAnxcG+1dK4pzQ4dtg2p6c5l7LNx1xr14vvhTfpa8iA4neW1Syu6lrX05UKkoS0aa1i2no1ua1XSjCAAAAAAAAAAAMtrBVLqEJLc5xT70BdPCLOOHYTQsaa0VOhTgl5sUv7G2AAAAAGOvWpW9J1a9WMYrpcmkl5WyN3u0PJ9k9K2YbZ7/iS5fq6gSgEGntdyNCWjxvupVX/gfPZfyL9NP7mt+gCdAgvsv5F+mn9zW/QPZfyL9NP7mt+gCdAgvsv5F+mn9zW/QPZfyL9NP7mt+gCdAgvsv5F+mn9zW/QSrAsZsMwYZDEsJr8ulNy5MuTKOuknF7pJPpT4AfoAAAAcO2w7U9Ocy9lmv1xr14vvhTfpfYgG2DanpzmXss3HXGvXi++FN+l9iOGgAAAAAAAAAAAAM9j4bS+1j6yMBnsfDaf2sfWQF3AD8POGaMPylg0sSxKfihBe+qS03Rj/AHfBAb+MYtYYJYSv8VuoU6cemUvQl0tvglvOIZx253deUrXKdtzcdWufqJOT8cYe9j/Fr5Ec5znnDFc4Ym7vE6zUU3zdJP2lNdSXF9be99yUeA38XxrFMauOfxa/q1Za9M5N6eRdCXiRoAAAAAAAAAAC02w74NLTz6/49QqyWm2HfBpaefX/AB6gE9AOHbYNqenOZeyzcdca9eL74U36WvIgG2DanpzmXss3HXGvXi++FN+l9iOGgAAAAAAAAAAAAAAAz2PhtL7WPrIwGex8Np/ax9ZAXWvLqhY2k7u7qqMIQcpyfQklq2+xFStoeb7nOWYJX1TWNKOsaNP5Mdel/Wl0vsXQkdb/ANQ+ZpWWEUcv209JV3y6uj+JF7l/FL1GV8AAAAAAAAAAAAAABabYd8Glp59f8eoVZJ7DaLc4fs6t8r4PyoS915+r0PSVWbUIeVNavx6ATXbDtT05zL2WbjrjXrxffCm/S+xHDQAAAAAAAAAAAAAAAAABnsPDqX2sfWRgNiwkoX1KUuhVYt/zICU7XMWeL7QL2py2406vMx8Sp+1aXi5Sm+0hxnv7md7fVbqs/bTqym/LKTb9JgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA91qU6FaVKotHGTTXU09GeDq22XZ5fYZjNbHsKtpTt6snOfJWrpSe+XKXyG9Wn0LVp6bteUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdbMtnt/m3Fade4t5RtIzTqVGtFNJ+8p/Kb6G1uS18SYR3/bOLfuku5/kfC4v7Fa/u0P5UAMz6OwqbtN/7RV89/2AAiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP18p/89R85elFwrDwGn9nH0IADOAAP/9k='
                    className='w-10 h-10 fill-white border-2 border-white rounded-sm' />
            </div>
        </footer >
    )
}
